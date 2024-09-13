import backgroundImage from '@/assets/images/header/banner_light.png';
import { Box, Stack, Typography } from '@mui/material';
import ImageCard from '@/components/ImageCard';
import image1 from '@/assets/images/help/1.png';
import image2 from '@/assets/images/help/2.png';
import image3 from '@/assets/images/help/3.png';
import image4 from '@/assets/images/help/4.png';
import image5 from '@/assets/images/help/5.png';
import image6 from '@/assets/images/help/6.png';
import image7 from '@/assets/images/help/7.png';
import image8 from '@/assets/images/help/8.png';

function HelpPage() {
    return (
        <Box>
            <Box
                sx={{
                    justifyContent: 'center',
                    marginBottom: '20px',
                }}
            >
                <Stack
                    sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: '#193D34',
                        width: '100%',
                        height: '160px',
                        marginBottom: '40px',
                        borderRadius: '10px',
                    }}
                >
                    <h1
                        style={{
                            textAlign: 'center',
                            maxWidth: '500px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            letterSpacing: '2px',
                            fontWeight: '800',
                            fontSize: '30px',
                        }}
                    >
                        How to User Rbetrage
                    </h1>
                </Stack>
                <Typography sx={{ mb: 5 }}>
                    Welcome to Rbetrage! This step-by-step guide will help you navigate the platform and maximize its features
                    for smart buying and selling decisions. Let’s dive into how you can use every part of Rbetrage
                </Typography>

                <Stack
                    sx={{
                        maxWidth: '1036px'
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>1. Setting Up Your Account</Typography>

                    <Stack
                        sx={{
                            padding: 3,
                            flexDirection: 'row',
                            background: '#E9F2F4',
                            mt: 5
                        }}
                    >
                        <Stack spacing={2}>
                            <Typography>Creating Your Account</Typography>
                            <Typography>
                                To get started, create an account by signing up with your email or social media. Having an account unlocks all the personalize
                                features like notifications, saved searches, and tasks management.
                            </Typography>
                        </Stack>

                        <img src={image1} alt="help 1" width='308px' />

                    </Stack>

                </Stack>


            </Box>
        </Box>
    );
}

export default HelpPage;
