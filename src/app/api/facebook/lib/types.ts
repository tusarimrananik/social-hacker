export interface I1_data_to_collect_html_selector {
  to_collect_fb_profile_name_element_selector: string;
  to_collect_fb_profile_picture_element_selector: string;
  to_collect_fb_profile_cover_picture_element_selector: string;
  to_collect_fb_bio_element_selector: string;
  to_collect_fb_friends_element_selector: string;
  to_collect_fb_profile_locked_element_selector: string;
  to_collect_fb_story_ring_element_selector: string;
  to_collect_fb_about_list_element_selector: string;
}

export interface I2_collected_full_html_element {
  collected_fb_name_element: HTMLElement | null;
  collected_fb_profile_picture_element: HTMLElement | null;
  collected_fb_cover_picture_element: HTMLElement | null;
  collected_fb_bio_element: HTMLElement | null;
  collected_fb_friends_element: HTMLElement | null;
  collected_fb_profile_locked_icon_element: HTMLElement | null;
  collected_fb_about_list_element: HTMLElement | null;
}

export interface I3_injectable_collected_data {
  injectable_collected_fb_profile_name: string | null;
  injectable_collected_fb_profile_picture_url: string | null;
  injectable_collected_fb_cover_picture_url: string | null;
  injectable_collected_fb_bio_text: string | null;
  injectable_collected_fb_friends_count: { count: string; type: 'friends' | 'followers' } | null;
  injectable_collected_fb_profile_locked_icon_boolean: boolean | null;
  injectable_collected_fb__story_ring_boolean: boolean | null;
  injectable_collected_fb_about_list: HTMLElement | null;
}

export interface I4_data_to_inject_html_selector {
  to_inject_fb_profile_name_element_selector: string;
  to_inject_fb_profile_picture_element_selector: string;
  to_inject_fb_profile_display_name_element_selector: string;
  to_inject_fb_profile_cover_photo_element_selector: string;
  to_inject_fb_status_pic_element_selector: string;
  to_inject_fb_bio_element_selector: string;
  to_inject_fb_friends_count_element_selector: string;
  to_inject_fb_friends_text_element_selector: string;
  to_inject_fb_is_locked_element_selector: string;
  to_inject_fb_about_list_selector: string;
}


export interface FacebookUrlValidationResult {
  status: 'valid' | 'invalid';
  errors: string[];
  formattedFacebookProfileUrl: string;
}