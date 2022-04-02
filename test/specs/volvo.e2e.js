describe("Volvo 3-point safety belt page testing", () => {
    it("should open the given url", async () => {
        await browser.url(
            "https://www.volvocars.com/intl/v/car-safety/a-million-more"
        );
    });

    it("should test the page title", async () => {
        await expect(browser).toHaveTitle(
            "A million more | Volvo Cars - International"
        );
    });

    it("should accept the cookie settings", async () => {
        const popupButtonAccept = $("#onetrust-accept-btn-handler");
        await expect(popupButtonAccept).toBeClickable();
        popupButtonAccept.click();
    });

    it("should check the logo is displayed", async () => {
        const logoImage = $("#site-nav-topbar-wrapper img");
        await logoImage.isDisplayed();
    });

    it("should test the navbar menu", async () => {
        const BtnMenu = $("#sitenav-sidenav-toggle");
        await expect(BtnMenu).toBeEnabled();
        await expect(BtnMenu).toBeDisplayed();
        await expect(BtnMenu).toBeClickable();
    });

    it("should test the page heading", async () => {
        const pageHeading = $("#ModelIntro-1 h2");
        await expect(pageHeading).toBeExisting();
        await expect(pageHeading).toHaveText(
            "Ideas that change the world are often the most controversial."
        );
    });

    it("should test the page sub heading", async () => {
        const pageSubHeading = $("#ModelIntro-1 p");
        await expect(pageSubHeading).toBeExisting();
        await expect(pageSubHeading).toHaveText(
            "After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety."
        );
    });

    it("should test the first section heading", async () => {
        const pageSectionHeading = $(".fl");
        await expect(pageSectionHeading).toBeExisting();
        await expect(pageSectionHeading).toHaveTextContaining("A million more.");
    });

    it("should test the video", async () => {
        const video1 = $("#Video-1 video");
        await video1.isDisplayed();
    });

    it("should test the url of learn more about car safety hyperlink", async () => {
        const pageHyperlink = $("#IconCallouts-1 a");
        await expect(pageHyperlink).toBeClickable();
        await expect(pageHyperlink).toHaveHref("/intl/v/car-safety");
    });

    it("should test the url of learn more button", async () => {
        const pagelinkButton = $("#ImageWithText-1 a");
        await expect(pagelinkButton).toBeClickable();
        await expect(pagelinkButton).toHaveHref(
            "/intl/v/car-safety/safety-heritage"
        );
    });
});