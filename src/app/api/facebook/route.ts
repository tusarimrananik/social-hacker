import { NextResponse } from 'next/server';
import fs from 'fs';
import getPuppeteerBrowser from '../getPuppeteerBrowser';
import { facebookCookies } from './lib/facebookCookie';
import { scrapeFacebook } from './scrapeFB';
import setDataTakeSS from './setDataTakeSS';

const baseUrl = "https://tusarimrananik.github.io/FacebookUI";

const page = await getPuppeteerBrowser("https://www.facebook.com/tusarimrananik", facebookCookies())
const scrapedData = await scrapeFacebook(page)
await page.goto(baseUrl)
const screenshotBuffer = await setDataTakeSS(scrapedData, page)
page.close();

export async function GET() {
  fs.writeFileSync('screenshot.png', screenshotBuffer);
  return NextResponse.json({ message: "success!" }, { status: 200 });
}

