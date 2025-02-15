import { I1_data_to_collect_html_selector, I4_data_to_inject_html_selector } from "./types";


export const O1_data_to_collect_html_selector: I1_data_to_collect_html_selector = {
    to_collect_fb_profile_name_element_selector: 'h1',
    to_collect_fb_profile_picture_element_selector: '.x1rg5ohu image',
    to_collect_fb_profile_cover_picture_element_selector: "[data-imgperflogname='profileCoverPhoto']",
    to_collect_fb_bio_element_selector:
        "div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x78zum5.xdt5ytf.x1t2pt76 > div > div > div.x6s0dn4.x78zum5.xdt5ytf.x193iq5w > div.x9f619.x193iq5w.x1talbiv.x1sltb1f.x3fxtfs.x1swvt13.x1pi30zi.xw7yly9 > div > div.x9f619.x1n2onr6.x1ja2u2z.xeuugli.xs83m0k.xjl7jj.x1xmf6yo.x1emribx.x1e56ztr.x1i64zmx.xnp8db0.x1d1medc.x7ep2pv.x1xzczws > div.x7wzq59 > div > div:nth-child(1) > div > div > div > div > div.xieb3on > div:nth-child(1) > div > div > span",
    to_collect_fb_friends_element_selector: ".x193iq5w > a",
    to_collect_fb_profile_locked_element_selector:
        'img.xz74otr[src="/images/wem/private_sharing/lp-badge-large-3x.png"]',
    to_collect_fb_story_ring_element_selector:
        "div > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x78zum5.xdt5ytf.x1t2pt76 > div > div > div:nth-child(1) > div.x9f619.x1ja2u2z.x78zum5.x2lah0s.x1n2onr6.xl56j7k.x1qjc9v5.xozqiw3.x1q0g3np.x1l90r2v.x1ve1bff > div > div > div > div.x15sbx0n.x1xy773u.x390vds.xb2vh1x.x14xzxk9.x18u1y24.xs6kywh.x5wy4b0 > div > div > div > svg > g > circle.x1p5r69i.x17ld789",
    to_collect_fb_about_list_element_selector: "ul",
};


export const O4_data_to_inject_html_selector: I4_data_to_inject_html_selector = {
    to_inject_fb_profile_name_element_selector: '#mainName',
    to_inject_fb_profile_picture_element_selector: '.profilePhotoImage',
    to_inject_fb_profile_display_name_element_selector: '.nameTop',
    to_inject_fb_profile_cover_photo_element_selector: '.coverPhotoImage',
    to_inject_fb_status_pic_element_selector: '#statusPic',
  
    to_inject_fb_bio_element_selector: '#bio',
    to_inject_fb_friends_count_element_selector: '#friendsNumber',
    to_inject_fb_friends_text_element_selector: '#friendsText',
    to_inject_fb_is_locked_element_selector: '#isLocked',
    to_inject_fb_about_list_selector: '.intro'
};
