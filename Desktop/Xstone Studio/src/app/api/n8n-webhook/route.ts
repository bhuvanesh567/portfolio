import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In production, sync with Supabase and push to n8n flow endpoint
    console.log("Ingesting qualified lead payload into CRM:", body);

    return NextResponse.json({
      success: true,
      message: "Lead qualified and webhook dispatched successfully",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("CRM Webhook Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead payload" },
      { status: 400 }
    );
  }
}
