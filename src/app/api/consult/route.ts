import { NextResponse } from "next/server";

type ConsultPayload = {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ConsultPayload;

  try {
    body = (await request.json()) as ConsultPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  if (
    !normalize(body.name) ||
    !normalize(body.email) ||
    !normalize(body.phone) ||
    !normalize(body.serviceType) ||
    !normalize(body.message)
  ) {
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
