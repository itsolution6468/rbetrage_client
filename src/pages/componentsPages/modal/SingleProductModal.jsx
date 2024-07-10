import Modal from '@/components/modal';
import { Link, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function SingleProductModal({ openModal, setOpenModal, similarProducts, mainProduct }) {
	const [productIds, setProductIds] = useState([]);

	useEffect(() => {
		const newProductIds = [...productIds];

		similarProducts.forEach((product) => {
			newProductIds.push(product.id);
		});

		setProductIds(newProductIds);
	}, [similarProducts]);

	const closeModal = () => {
		setOpenModal(false);
	};

	return (
		<Modal openModal={openModal} fnCloseModal={closeModal} padding>
			<img src={mainProduct.imageUrl} alt="main_product" key={`product-${mainProduct.id}`} width="200px" />
			<Stack gap={3}>
				{similarProducts.map((product) => (
					<Stack key={`product-${product.id}`}>
						{product.id !== mainProduct.id ? (
							<Stack>
								<img
									src={product.imageUrl}
									alt="similar_product"
									key={`product-${product.id}`}
									width="50px"
								/>
								<Typography>{product.marketPlace}</Typography>
								<Typography>{product.title}</Typography>
								<Typography>{product.price}</Typography>
								<Link href={product.url} target="_blank" rel="noreferrer noopener">
									view more...
								</Link>
							</Stack>
						) : (
							''
						)}
					</Stack>
				))}
			</Stack>
		</Modal>
	);
}

export default SingleProductModal;
