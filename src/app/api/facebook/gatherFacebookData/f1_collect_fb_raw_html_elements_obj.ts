import { Page } from "puppeteer";
import { O1_data_to_collect_html_selector } from "../selectors";
import { I1_data_to_collect_html_selector, I2_collected_full_html_element } from "../types";


export const f1_collect_fb_raw_html_elements_obj = async (page: Page): Promise<Record<string, any>> => {
    await Promise.all(
        Object.values(O1_data_to_collect_html_selector).map((selector) =>
            page.waitForSelector(selector, { timeout: 15000 }).catch(() => null)
        )
    );

    return page.evaluate((selectors: I1_data_to_collect_html_selector) => {

        const collectElement = (selector: string) => document.querySelector(selector)?.outerHTML || null;

        const O2_collected_full_html_element = {} as I2_collected_full_html_element;

        Object.entries(selectors).forEach(([key, selector]) => {
            (O2_collected_full_html_element as any)[key] = collectElement(selector);
        });

        return O2_collected_full_html_element;
    }, O1_data_to_collect_html_selector).finally(() => page.close());
};