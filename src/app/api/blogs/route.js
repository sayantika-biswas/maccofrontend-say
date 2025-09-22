import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.maccotech.in/api/blogs");
    const data = await res.json();

    return {
      props: {
        blogs: data,
      },
    };
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
