// Contact form API route
// This file handles POST requests from the contact form on /contact.
//
// When a visitor submits the form, this route does two things:
//   1. Saves the submission to Supabase (contact_submissions table)
//   2. Sends an email notification to your inbox via Resend
//
// Full implementation comes in the Contact step.
// This stub file establishes the route so the folder structure is correct.

import { NextResponse } from "next/server";

export async function POST() {
  // Placeholder — real logic added in the Contact implementation step
  return NextResponse.json(
    { success: false, message: "Contact form not yet implemented." },
    { status: 501 }
  );
}
