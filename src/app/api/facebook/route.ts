import { NextResponse } from 'next/server';
import getPuppeteerBrowser from '../getPuppeteerBrowser';
import { facebookCookies } from './lib/facebookCookie';
import { scrapeFacebook } from './scrapeFacebook';

const site = "https://www.facebook.com/tusarimrananik";
const page = await getPuppeteerBrowser(site, facebookCookies())

const scrapedData = await scrapeFacebook(page);


export async function GET() {
  return NextResponse.json({ scrapedData }, { status: 200 });
}