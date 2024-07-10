import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTopOnRouteChange from '@hocs/withScrollTopOnRouteChange';
import withLazyLoadably from '@hocs/withLazyLoadably';

import MinimalLayout from '@/components/layouts/minimalLayout';
import MainLayout from '@/components/layouts/mainLayout';

import Page404 from '@/pages/errorPages/404';
import ProtectedRoutes from '@/components/auth/ProtectedRoutes';

const LandingPage = withLazyLoadably(lazy(() => import('@/pages/landingPage')));
const Dashboard1Page = withLazyLoadably(lazy(() => import('@/pages/dashboardsPages/dashboard1')));
const Dashboard2Page = withLazyLoadably(lazy(() => import('@/pages/dashboardsPages/dashboard2')));
const Dashboard3Page = withLazyLoadably(lazy(() => import('@/pages/dashboardsPages/dashboard3')));
const Dashboard4Page = withLazyLoadably(lazy(() => import('@/pages/dashboardsPages/dashboard4')));
const Dashboard5Page = withLazyLoadably(lazy(() => import('@/pages/dashboardsPages/dashboard5')));
const FormsComponentPage = withLazyLoadably(lazy(() => import('@/pages/componentsPages/forms')));
const LoadersComponentPage = withLazyLoadably(lazy(() => import('@/pages/componentsPages/loaders')));
const TablesComponentPage = withLazyLoadably(lazy(() => import('@/pages/componentsPages/tables')));
const ModalComponentPage = withLazyLoadably(lazy(() => import('@/pages/componentsPages/modal')));
const SnackbarComponentPage = withLazyLoadably(lazy(() => import('@/pages/componentsPages/snackbar')));
const CarouselComponentPage = withLazyLoadably(lazy(() => import('@/pages/componentsPages/carousel')));
const NavigationComponentPage = withLazyLoadably(lazy(() => import('@/pages/componentsPages/navigation')));
const CardComponentPage = withLazyLoadably(lazy(() => import('@/pages/uiComponentsPages/card')));
const CardHeaderComponentPage = withLazyLoadably(lazy(() => import('@/pages/uiComponentsPages/cardHeader')));
const PageHeaderComponentPage = withLazyLoadably(lazy(() => import('@/pages/uiComponentsPages/pageHeader')));
const Page403 = withLazyLoadably(lazy(() => import('@/pages/errorPages/403')));
const Page500 = withLazyLoadably(lazy(() => import('@/pages/errorPages/500')));
const Page503 = withLazyLoadably(lazy(() => import('@/pages/errorPages/503')));
const Page505 = withLazyLoadably(lazy(() => import('@/pages/errorPages/505')));
const Pricing1Page = withLazyLoadably(lazy(() => import('@/pages/pricingPages/pricing1')));
const Pricing2Page = withLazyLoadably(lazy(() => import('@/pages/pricingPages/pricing2')));
const EditProfilePage = withLazyLoadably(lazy(() => import('@/pages/editProfile')));
const NotificationsPage = withLazyLoadably(lazy(() => import('@/pages/notificationsPage')));
const WIPPage = withLazyLoadably(lazy(() => import('@/pages/wip')));
const SamplePage = withLazyLoadably(lazy(() => import('@/pages/sample')));
const ThemeTypographyPage = withLazyLoadably(lazy(() => import('@/pages/themePages/themeTypography')));
const ThemeColorsPage = withLazyLoadably(lazy(() => import('@/pages/themePages/themeColors')));
const ThemeShadowPage = withLazyLoadably(lazy(() => import('@/pages/themePages/themeShadow')));
const AmazonProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Amazon')));
const EtsyProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Etsy')));
const WalmartProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Walmart')));
const TrendingProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Trending')));
const FaqPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Faq')));
const TermsPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Terms')));
const PrivacyPolicyPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/PrivacyPolicy')));
const DropshippingPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Dropshipping')));
const ContactUsPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/ContactUs')));
const ConceptPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Concept')));
const TrendingProductsHelpPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/TrendingProducts')));
const SuccessStoryPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/SuccessStories')));

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						{/* <Route index element={<ProtectedRoutes component={LandingPage} />} /> */}
						<Route index element={<LandingPage />} />
						<Route path="home" element={<LandingPage />} />
						<Route path="trending" element={<TrendingProductPage />} />
						<Route path="samplePage" element={<SamplePage />} />
						<Route path="products/">
							<Route path="amazon" element={<AmazonProductPage />} />
							<Route path="etsy" element={<EtsyProductPage />} />
							<Route path="walmart" element={<WalmartProductPage />} />
						</Route>
						<Route path="faq" element={<FaqPage />} />
						<Route path="terms_and_conditions" element={<TermsPage />} />
						<Route path="privacy" element={<PrivacyPolicyPage />} />
						<Route path="dropshipping" element={<DropshippingPage />} />
						<Route path="contact_us" element={<ContactUsPage />} />
						<Route path="concept" element={<ConceptPage />} />
						<Route path="trending_products_guide" element={<TrendingProductsHelpPage />} />
						<Route path="success_story" element={<SuccessStoryPage />} />

						<Route path="dashboards/">
							<Route path="dashboard1" element={<Dashboard1Page />} />
							<Route path="dashboard2" element={<Dashboard2Page />} />
							<Route path="dashboard3" element={<Dashboard3Page />} />
							<Route path="dashboard4" element={<Dashboard4Page />} />
							<Route path="dashboard5" element={<Dashboard5Page />} />
						</Route>

						<Route path="components/">
							<Route path="forms" element={<FormsComponentPage />} />
							<Route path="loaders" element={<LoadersComponentPage />} />
							<Route path="tables" element={<TablesComponentPage />} />
							<Route path="modal" element={<ModalComponentPage />} />
							<Route path="snackbar" element={<SnackbarComponentPage />} />
							<Route path="carousel" element={<CarouselComponentPage />} />
							<Route path="navigation" element={<NavigationComponentPage />} />
							<Route path="card" element={<CardComponentPage />} />
							<Route path="cardHeader" element={<CardHeaderComponentPage />} />
							<Route path="pageHeader" element={<PageHeaderComponentPage />} />
						</Route>

						<Route path="theme/">
							<Route path="typography" element={<ThemeTypographyPage />} />
							<Route path="colors" element={<ThemeColorsPage />} />
							<Route path="boxShadow" element={<ThemeShadowPage />} />
						</Route>

						<Route path="pages/">
							<Route path="settings" element={<EditProfilePage />} />
							<Route path="notifications" element={<NotificationsPage />} />
							<Route path="pricing/">
								<Route path="pricing1" element={<Pricing1Page />} />
								<Route path="pricing2" element={<Pricing2Page />} />
							</Route>
							<Route path="error/">
								<Route path="404" element={<Page404 />} />
								<Route path="403" element={<Page403 />} />
								<Route path="500" element={<Page500 />} />
								<Route path="503" element={<Page503 />} />
								<Route path="505" element={<Page505 />} />
							</Route>
						</Route>
					</Route>
					<Route path="/" element={<MainLayout container={false} pb={false} />}>
						<Route path="pages/">
							<Route path="wip" element={<WIPPage />} />
						</Route>
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</ScrollToTopOnRouteChange>
		</BrowserRouter>
	);
}

export default Router;
