import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/components/ui/dialog";
import {api_with_token} from "@/lib/api-requests";

export function AddProductPopupButton({onProductAdded}: {onProductAdded: (product: any) => void}) {
  const [formValues, setFormValues] = useState({
    company: "",
    productId: "",
    category: "",
    modelNo: "",
    stock: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = async () => {
    setError("");
    const {company, productId, category, modelNo, stock} = formValues;

    // Parse numeric fields
    const parsedProductId = parseInt(productId, 10);
    const parsedStock = parseInt(stock, 10);

    // Basic validation
    if (!company.trim() || isNaN(parsedProductId) || !category.trim() || !modelNo.trim() || isNaN(parsedStock)) {
      setError("Please fill out all fields correctly.");
      return;
    }

    const body = {
      company: company.trim(),
      product_id: parsedProductId,
      category: category.trim(),
      model_no: modelNo.trim(),
      stock: parsedStock,
    };

    try {
      setLoading(true);
      const res = await api_with_token.post("/stocks/addproduct", body);

      const newProduct = res.data?.newProduct || body;
      onProductAdded(newProduct);

      // Reset form fields
      setFormValues({
        company: "",
        productId: "",
        category: "",
        modelNo: "",
        stock: "",
      });

      // Close dialog
      setIsOpen(false);
    } catch (err) {
      console.error("Failed to add product:", err);
      setError("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="ml-2">Add Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input name="company" placeholder="Company" value={formValues.company} onChange={handleInputChange} />
          <Input
            name="productId"
            placeholder="Product ID"
            value={formValues.productId}
            onChange={handleInputChange}
            type="number"
          />
          <Input name="category" placeholder="Category" value={formValues.category} onChange={handleInputChange} />
          <Input name="modelNo" placeholder="Model No" value={formValues.modelNo} onChange={handleInputChange} />
          <Input name="stock" placeholder="Stock" value={formValues.stock} onChange={handleInputChange} type="number" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
