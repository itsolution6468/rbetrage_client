import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTopOnRouteChange from '@hocs/withScrollTopOnRouteChange';
import withLazyLoadably from '@hocs/withLazyLoadably';

import MinimalLayout from '@/components/layouts/minimalLayout';
import MainLayout from '@/components/layouts/mainLayout';

import Page404 from '@/pages/errorPages/404';
import ProtectedRoutes from '@/components/auth/ProtectedRoutes';
import HelpPage from '@/pages/helpPages/Help';
import BlogPage from '@/pages/helpPages/Blogs';

const LandingPage = withLazyLoadably(lazy(() => import('@/pages/landingPage')));
const Page403 = withLazyLoadably(lazy(() => import('@/pages/errorPages/403')));
const Page500 = withLazyLoadably(lazy(() => import('@/pages/errorPages/500')));
const Page503 = withLazyLoadably(lazy(() => import('@/pages/errorPages/503')));
const Page505 = withLazyLoadably(lazy(() => import('@/pages/errorPages/505')));
const FilteredProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/FilteredProducts')));
const AmazonProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Amazon')));
const EtsyProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Etsy')));
const WalmartProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Walmart')));
const AlibabaProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/Alibaba')));
const FacebookTrendingProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/trending/Facebook')));
const GoogleTrendingProductPage = withLazyLoadably(lazy(() => import('@/pages/productsPages/trending/Google')));
const FaqPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Faq')));
const TermsPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Terms')));
const PrivacyPolicyPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/PrivacyPolicy')));
const DropshippingPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Dropshipping')));
const ContactUsPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/ContactUs')));
const ConceptPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/Concept')));
const TrendingProductsHelpPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/TrendingProducts')));
const SuccessStoryPage = withLazyLoadably(lazy(() => import('@/pages/helpPages/SuccessStories')));
const AccountPage = withLazyLoadably(lazy(() => import('@/pages/accountPages')));

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						{/* <Route index element={<ProtectedRoutes component={LandingPage} />} /> */}
						<Route index element={<LandingPage />} />
						<Route path="home" element={<LandingPage />} />
						<Route path="account/">
							<Route path="settings" element={<AccountPage />} />
						</Route>
						<Route path="trending/facebook" element={<FacebookTrendingProductPage />} />
						<Route path="trending/google" element={<GoogleTrendingProductPage />} />
						<Route path="products/">
							<Route path="amazon" element={<AmazonProductPage />} />
							<Route path="etsy" element={<EtsyProductPage />} />
							<Route path="walmart" element={<WalmartProductPage />} />
							<Route path="alibaba" element={<AlibabaProductPage />} />
							<Route path="filter" element={<FilteredProductPage />} />
						</Route>
						<Route path="faq" element={<FaqPage />} />
						<Route path="terms" element={<TermsPage />} />
						<Route path="privacy" element={<PrivacyPolicyPage />} />
						<Route path="dropshipping" element={<DropshippingPage />} />
						<Route path="help" element={<HelpPage />} />
						<Route path="blogs" element={<BlogPage />} />
						<Route path="contact_us" element={<ContactUsPage />} />
						<Route path="concept" element={<ConceptPage />} />
						<Route path="trending_products_guide" element={<TrendingProductsHelpPage />} />
						<Route path="success_story" element={<SuccessStoryPage />} />

						<Route path="error/">
							<Route path="404" element={<Page404 />} />
							<Route path="403" element={<Page403 />} />
							<Route path="500" element={<Page500 />} />
							<Route path="503" element={<Page503 />} />
							<Route path="505" element={<Page505 />} />
						</Route>
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</ScrollToTopOnRouteChange>
		</BrowserRouter>
	);
}

export default Router;
