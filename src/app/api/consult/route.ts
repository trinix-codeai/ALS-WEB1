import { NextResponse } from "next/server";

type ConsultPayload = {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ConsultPayload;

  if (!body.name || !body.email || !body.phone || !body.serviceType || !body.message) {
    return NextResponse.json(
      { message: "Please complete all consultation details." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { message: "Consultation request received. A lawyer will reach out shortly." },
    { status: 200 },
  );
}
