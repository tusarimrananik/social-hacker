
import { I2_collected_full_html_element, I3_injectable_collected_data } from "./lib/types";


// const page = await getPuppeteerBrowser("url");
// const collectedData = await f1_collect_fb_raw_html_elements_obj(page);


export const f2_convert_injectable_collected_data = (
    collectedData: I2_collected_full_html_element
): I3_injectable_collected_data => {

    const injectableCollectedData: I3_injectable_collected_data = {
        injectable_collected_fb_profile_name: parseText(collectedData.collected_fb_name_element?.outerHTML || null),

        injectable_collected_fb_profile_picture_url: /src="(.*?)"/.exec(collectedData.collected_fb_profile_picture_element?.outerHTML || "")?.[1] || null,

        injectable_collected_fb_cover_picture_url: /src="(.*?)"/.exec(collectedData.collected_fb_cover_picture_element?.outerHTML || "")?.[1] || null,

        injectable_collected_fb_bio_text: parseText(collectedData.collected_fb_bio_element?.outerHTML || null),

        injectable_collected_fb_friends_count: collectedData.collected_fb_friends_element ? {
            count: collectedData.collected_fb_friends_element.textContent?.split(' ')[0] || '0',
            type: collectedData.collected_fb_friends_element.textContent?.toLowerCase().includes("friend") ? "friends" : "followers"
        } : null,

        injectable_collected_fb_profile_locked_icon_boolean: !!collectedData.collected_fb_profile_locked_icon_element,

        injectable_collected_fb__story_ring_boolean: !!(collectedData as any).hasStoryRing,

        injectable_collected_fb_about_list: collectedData.collected_fb_about_list_element,
    };
    return injectableCollectedData;
};



const parseText = (html: string | null): string | null =>
    html ? new DOMParser().parseFromString(html, "text/html").body.textContent?.trim() || null : null;