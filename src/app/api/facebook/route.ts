import { NextResponse } from 'next/server';
import { f1_collect_fb_raw_html_elements_obj } from "./f1_collect_fb_raw_html_elements_obj";
import getPuppeteerBrowser from '../getPuppeteerBrowser';
import { f2_convert_injectable_collected_data } from "./f2_convert_injectable_collected_data";
import { I2_collected_full_html_element } from './lib/types';
import { facebookCookies } from './lib/facebookCookie';

const site = "https://www.facebook.com/tusarimrananik";
const page = await getPuppeteerBrowser("https://www.facebook.com/tusarimrananik", facebookCookies())

const collectedHTMLElement = await f1_collect_fb_raw_html_elements_obj(page) as I2_collected_full_html_element;

// const injectableCollectedData = f2_convert_injectable_collected_data(collectedHTMLElement)

export async function GET() {


  return NextResponse.json({ collectedHTMLElement }, { status: 200 });
}