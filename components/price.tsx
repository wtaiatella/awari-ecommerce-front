import NumberFormat from 'react-number-format';

interface IBRLFormat {
	value: number;
}

const BRLFormat = ({ value }: IBRLFormat) => {
	return (
		<NumberFormat
			value={value}
			displayType={'text'}
			decimalSeparator={','}
			thousandSeparator={'.'}
			fixedDecimalScale={true}
			decimalScale={2}
			prefix={'R$ '}
		/>
	);
};

const withDiscount = (price: number, priceWithDiscount: number) => {
	const discount = (1 - priceWithDiscount / price) * 100;

	return (
		<>
			<p>
				De:
				<BRLFormat value={price} />
			</p>
			<p>
				Por:
				<BRLFormat value={priceWithDiscount} />
			</p>
			<p>
				Desconto:
				<NumberFormat
					value={discount}
					displayType={'text'}
					suffix={'%'}
					fixedDecimalScale={true}
					decimalScale={2}
					decimalSeparator={','}
					thousandSeparator={'.'}
				/>
			</p>
		</>
	);
};

const withoutDiscount = (price: number) => {
	return (
		<p>
			<BRLFormat value={price} />
		</p>
	);
};

interface PriceProps {
	price: number;
	priceWithDiscount: number;
}

const Price = ({ price, priceWithDiscount }: PriceProps) => {
	if (priceWithDiscount > 0) return withDiscount(price, priceWithDiscount);
	else return withoutDiscount(price);
};

export default Price;
