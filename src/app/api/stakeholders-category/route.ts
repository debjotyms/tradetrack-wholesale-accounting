import path from "path";
import {promises as fs} from "fs";
import {NextResponse} from "next/server";

export async function DELETE(request: Request) {
  const {searchParams} = new URL(request.url);
  const categoryName = searchParams.get("categoryName");
  if (!categoryName) {
    return NextResponse.json({error: "No categoryName provided"}, {status: 400});
  }

  const jsonPath = path.join(process.cwd(), "src/data/stakeholders-category.json");
  const fileData = await fs.readFile(jsonPath, "utf-8");
  const categories = JSON.parse(fileData);
  const filtered = categories.filter((c: any) => c.categoryName !== categoryName);
  await fs.writeFile(jsonPath, JSON.stringify(filtered, null, 2));
  return NextResponse.json({success: true});
}

export async function POST(request: Request) {
  const body = await request.json();
  const {categoryName} = body;
  if (!categoryName) {
    return NextResponse.json({error: "No categoryName provided"}, {status: 400});
  }

  const jsonPath = path.join(process.cwd(), "src/data/stakeholders-category.json");
  const fileData = await fs.readFile(jsonPath, "utf-8");
  const categories = JSON.parse(fileData);
  categories.push({categoryName});
  await fs.writeFile(jsonPath, JSON.stringify(categories, null, 2));
  return NextResponse.json({success: true});
}