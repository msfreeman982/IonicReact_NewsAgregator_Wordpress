import {
    AdMob,
    BannerAdOptions,
    BannerAdSize,
    BannerAdPosition,
    BannerAdPluginEvents,
    AdMobBannerSize,
} from '@capacitor-community/admob'

const AdmobBanner = () => {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
        // Subscribe Banner Event Listener
    })

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size: AdMobBannerSize) => {
        // Subscribe Change Banner Size
    })

    const options: BannerAdOptions = {
        adId: import.meta.env.VITE_APP_ADMOB_ID,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        // isTesting: true,
        // npa: true
    }
    return AdMob.showBanner(options)
}

export default AdmobBanner
