import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, body: { message: "Missing required fields" } },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not defined");
      return NextResponse.json(
        { success: false, body: { message: "Server configuration error" } },
        { status: 500 }
      );
    }

    const formData = {
      ...body,
      access_key: accessKey,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "RSA-Improvement-App/1.0",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        body: { message: data.message || "Message sent successfully!" },
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          body: { message: data.message || "Failed to send message" },
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { success: false, body: { message: "Internal server error" } },
      { status: 500 }
    );
  }
}
