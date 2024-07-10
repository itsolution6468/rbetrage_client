import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

function QACard({ data }) {
	const [expanded, setExpanded] = useState(false);

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

	return (
		<div>
			<Accordion
				expanded={expanded}
				onChange={handleExpansion}
				slots={{ transition: Fade }}
				slotProps={{ transition: { timeout: 600 } }}
				sx={{
					'& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
					'& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
					border: 'none',
				}}
			>
				<AccordionSummary
					expandIcon={
						<ExpandMoreIcon
							sx={{
								color: expanded ? '#193D34' : '#B0D46D',
							}}
						/>
					}
					aria-controls="panel1-content"
					id="panel1-header"
					sx={{
						backgroundColor: !expanded ? '#193D34' : '#B0D46D',
						borderRadius: '5px',
					}}
				>
					<Typography
						sx={{
							color: expanded ? '#193D34' : '#B0D46D',
							fontSize: '15px',
						}}
					>
						{data.title}
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						backgroundColor: '#E9F2F4',
						marginTop: '16px',
						borderRadius: '5px',
						padding: '20px',
						boxShadow: 'none',
					}}
				>
					<Typography sx={{ fontSize: '13px' }}>{data.content}</Typography>
					{data.sub?.length &&
						data.sub.map((item, index) => (
							<div key={`sub-${index}`}>
								<Typography sx={{ ml: 1, mt: 1, fontSize: '13px' }}>{item.title}</Typography>
								{item.contents.map((subContent, index1) => (
									<Typography sx={{ ml: 3, fontSize: '13px' }} key={`subContent-${index1}`}>
										{subContent}
									</Typography>
								))}
							</div>
						))}
					{data.details?.length &&
						data.details.map((item, index) => (
							<div key={`details-${index}`}>
								<Typography sx={{ ml: 1, mt: 1, fontSize: '13px' }}>{item}</Typography>
							</div>
						))}
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default QACard;
