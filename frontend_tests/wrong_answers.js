const homepage = require('../pages/homepage');
const gamepage = require('../pages/gamepage');
const newspage = require('../pages/newspage');
const leaderboard = require('../pages/leaderboard');
const buspage = require('../pages/buspage');
const restaurantpage = require('../pages/restaurantpage');
const officepage = require('../pages/officepage');


describe('End to end wrong answers', () => {

    after(() => {
        homepage.close();
    })

    it('create user', async () => {
        var baseurl = 'https://responsivefight.herokuapp.com/';
        await homepage.go_to_url(baseurl);
        await homepage.scrollToTextBox();
        await homepage.enter_username('unhappy');
        await homepage.click_create_button();
    })

    it('start covid game', async () => {
        await homepage.click_start_button();
    })

    it('start news game', async () => {
        await gamepage.scrollToNewsButton();
        await gamepage.click_game_button();
    })

    it('play news game', async () => {
        await newspage.click_start_button();
        await newspage.sleep(1);
        await newspage.select_second_option();
        await newspage.click_home_button();
        await newspage.sleep(1);
    })

    it('start again', async () => {
        await homepage.scrollToTextBox();
        await homepage.enter_username('unhappy');
        await homepage.click_create_button();
        await homepage.click_start_button();
    })

    it('take the bus', async () => {
        await gamepage.sleep(1);
        await gamepage.scrollToBusButton();
        await gamepage.click_bus_button();
        await gamepage.sleep(1);
    })

    it('play bus quiz', async () => {
        await buspage.click_start_button();
        await buspage.sleep(1);
        await buspage.select_second_option();
        await buspage.click_try_again_button();
        await buspage.sleep(1);
        await buspage.select_first_option();
        await buspage.click_try_next_battle_button();
    })

    // it('go to a public place', async () => {
    //     await gamepage.sleep(1);
    //     await gamepage.scrollToPublicPlaceButton();
    //     await gamepage.click_public_place_button();
    //     await gamepage.sleep(1);
    // })

    it('play restaurant quiz', async () => {
        await restaurantpage.click_start_button();
        await restaurantpage.sleep(1);
        await restaurantpage.select_second_option();
        await restaurantpage.click_try_again_button();
        await restaurantpage.sleep(1);
        await restaurantpage.select_first_option();
        await restaurantpage.click_try_next_battle_button();
    })

    // it('go to the office', async () => {
    //     await gamepage.sleep(1);
    //     await gamepage.scrollToOfficeButton();
    //     await gamepage.click_office_button();
    //     await gamepage.sleep(1);
    // })

    it('play office quiz', async () => {
        await officepage.click_start_button();
        await officepage.sleep(1);
        await officepage.select_second_option();
        await officepage.click_try_again_button();
        await officepage.sleep(1);
        await officepage.select_first_option();
        await officepage.click_try_next_battle_button();
    })
})