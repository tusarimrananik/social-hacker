import { O4_data_to_inject_html_selector } from "./../selectors";
import { I3_injectable_collected_data, I4_data_to_inject_html_selector } from "./../types";

async function injectData(
    collectedData: I3_injectable_collected_data,
    page: any
): Promise<void> {
    try {
        // Remove the global exposure of functions. Instead, define them inside page.evaluate.
        await page.evaluate(
            async (
                { data, selectors }: {
                    data: I3_injectable_collected_data;
                    selectors: I4_data_to_inject_html_selector;
                }
            ) => {

                // Helper: Wait for an element to become visible.
                const waitForElementVisibility = (
                    element: HTMLElement,
                    timeout: number = 5000
                ): Promise<void> =>
                    new Promise((resolve, reject) => {
                        const startTime = Date.now();
                        const checkVisibility = () => {
                            if (element?.offsetWidth && element?.offsetHeight) {
                                resolve();
                            } else if (Date.now() - startTime > timeout) {
                                reject(new Error("Element did not become visible in time"));
                            } else {
                                requestAnimationFrame(checkVisibility);
                            }
                        };
                        checkVisibility();
                    });

                // Helper: Set an image source and wait for it to load.
                const setImageWithLoadCheck = (
                    element: HTMLImageElement,
                    src: string
                ): Promise<void> =>
                    new Promise((resolve, reject) => {
                        if (!element) return reject(new Error("Element not found"));
                        element.src = src;
                        element.onload = () => resolve();
                        element.onerror = () => reject(new Error("Image failed to load"));
                    });

                // Instead of building an elements object, assign each element to its own variable.
                const aboutListSelector = document.querySelector(
                    (selectors as any).to_inject_fb_about_list_selector
                );
                const displayNameSelector = document.querySelector(
                    (selectors as any).to_inject_fb_profile_display_name_element_selector
                );
                const mainNameSelector = document.querySelector(
                    (selectors as any).to_inject_fb_profile_name_element_selector
                );
                const profilePicSelector = document.querySelector(
                    (selectors as any).to_inject_fb_profile_picture_element_selector
                );
                const statusPicSelector = document.querySelector(
                    (selectors as any).to_inject_fb_status_pic_element_selector
                );
                const coverPhotoSelector = document.querySelector(
                    (selectors as any).to_inject_fb_profile_cover_photo_element_selector
                );
                const bioSelector = document.querySelector(
                    (selectors as any).to_inject_fb_bio_element_selector
                );
                const friendsCountSelector = document.querySelector(
                    (selectors as any).to_inject_fb_friends_count_element_selector
                );
                const friendsTextSelector = document.querySelector(
                    (selectors as any).to_inject_fb_friends_text_element_selector
                );
                const lockedSelector = document.querySelector(
                    (selectors as any).to_inject_fb_is_locked_element_selector
                );

                // Alias data properties with friendlier names.
                const {
                    injectable_collected_fb_profile_name: profileName,
                    injectable_collected_fb_profile_picture_url: profilePictureUrl,
                    injectable_collected_fb_cover_picture_url: coverPictureUrl,
                    injectable_collected_fb_bio_text: bioText,
                    injectable_collected_fb_friends_count: friendsCount,
                    injectable_collected_fb_profile_locked_icon_boolean: profileLocked,
                    injectable_collected_fb__story_ring_boolean: storyRing,
                    injectable_collected_fb_about_list: aboutList,
                } = data;

                // Inject About List HTML.
                if (aboutList && aboutListSelector) {
                    try {
                        await waitForElementVisibility(aboutListSelector as HTMLElement);
                        aboutListSelector.insertAdjacentHTML("afterbegin", aboutList);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // Inject Profile Name into displayName element.
                if (profileName && displayNameSelector) {
                    displayNameSelector.textContent = profileName;
                    try {
                        await waitForElementVisibility(displayNameSelector as HTMLElement);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // Inject Profile Name into mainName element.
                if (profileName && mainNameSelector) {
                    mainNameSelector.textContent = profileName.trim().replace(/\s+/g, " ");
                    try {
                        await waitForElementVisibility(mainNameSelector as HTMLElement);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // Inject Profile Picture and Status Picture.
                if (profilePictureUrl && profilePicSelector && statusPicSelector) {
                    try {
                        await setImageWithLoadCheck(
                            profilePicSelector as HTMLImageElement,
                            profilePictureUrl
                        );
                        await setImageWithLoadCheck(
                            statusPicSelector as HTMLImageElement,
                            profilePictureUrl
                        );
                    } catch (error) {
                        console.error("Profile picture failed to load:", error);
                    }
                    try {
                        await waitForElementVisibility(profilePicSelector as HTMLElement);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // Inject Cover Photo.
                if (coverPictureUrl && coverPhotoSelector) {
                    try {
                        await setImageWithLoadCheck(
                            coverPhotoSelector as HTMLImageElement,
                            coverPictureUrl
                        );
                    } catch (error) {
                        console.error("Cover photo failed to load:", error);
                    }
                    try {
                        await waitForElementVisibility(coverPhotoSelector as HTMLElement);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // Inject Bio Text (or hide the element if not available).
                if (bioText && bioSelector) {
                    bioSelector.innerHTML = bioText;
                    try {
                        await waitForElementVisibility(bioSelector as HTMLElement);
                    } catch (error) {
                        console.error(error);
                    }
                } else if (bioSelector) {
                    bioSelector.classList.add("hidden");
                }

                // Inject Friends Count and Type.
                if (friendsCount && friendsCountSelector && friendsTextSelector) {
                    friendsCountSelector.innerText = friendsCount.count.toUpperCase();
                    friendsTextSelector.innerText = friendsCount.type;
                    try {
                        await waitForElementVisibility(friendsCountSelector as HTMLElement);
                        await waitForElementVisibility(friendsTextSelector as HTMLElement);
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    friendsCountSelector?.classList.add("hidden");
                    friendsTextSelector?.classList.add("hidden");
                }

                // Toggle Locked Icon.
                if (typeof profileLocked === "boolean" && lockedSelector) {
                    if (profileLocked) {
                        lockedSelector.classList.remove("hidden");
                    } else {
                        lockedSelector.classList.add("hidden");
                    }
                    try {
                        await waitForElementVisibility(lockedSelector as HTMLElement);
                    } catch (error) {
                        console.error(error);
                    }
                }

                // Toggle Story Ring on Profile Picture.
                if (typeof storyRing === "boolean" && profilePicSelector) {
                    if (storyRing) {
                        profilePicSelector.classList.add("hasStory");
                    } else {
                        profilePicSelector.classList.remove("hasStory");
                    }
                }
            },
            { data: collectedData, selectors: O4_data_to_inject_html_selector }
        );
    } catch (error) {
        console.error("Error injecting data:", error);
    } finally {
        // Close the page regardless of whether the injection was successful or not.
        await page.close();
    }
}

export default injectData;
