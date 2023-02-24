import { Typography, Container, Stack, Divider } from "@mui/material";
import { CustomButton } from "components";
import {
    Footer,
    NavigationBar,
    LandingPageSection,
    LandingPageCard,
} from "../../components";
import {
    landingpageimage1,
    landingpageimage2,
    landingpageimage3,
    landingimageCaseStudy,
} from "assets";

import { CaseStudyStatments } from "mockup/caseStudyStatments";

export const LandingPage = () => {
    return (
        <>
            <NavigationBar />
            <Container maxWidth="xl" sx={{ marginX: "auto" }}>
                <LandingPageSection
                    bgcolor="#fff"
                    image={landingpageimage1}
                    heading="it's better than sliced bread!"
                    txt="Tell the world how awesome your app is and why they should use it!"
                    buttonLabel="Get Started"
                    stackDirection="row"
                />
                <Divider />
                <LandingPageSection
                    bgcolor="#fff"
                    image={landingpageimage2}
                    heading="Feature 1"
                    txt="Explanation of why you are going to love it and the benefit!"
                    buttonLabel="Learn More"
                    stackDirection="row-reverse"
                />
                <Divider />
                <LandingPageSection
                    bgcolor="#fff"
                    image={landingpageimage3}
                    heading="Feature 2"
                    txt="Explantion of why you are going to love it and the benefit"
                    buttonLabel="Learn More"
                    stackDirection="row"
                />
                <Divider />
                <Stack
                    bgcolor={"#fff"}
                    direction="column"
                    sx={{ padding: "4rem" }}
                    justifyContent="space-between"
                    spacing={3}>
                    <Typography variant="h3" align="center">
                        Happy Customers
                    </Typography>
                    <Typography variant="body1" align="center">
                        They love ui! isn't it obvious
                    </Typography>
                    <Stack
                        direction={"row"}
                        justifyContent="space-around"
                        alignItems={"flex-start"}
                        spacing={2}>
                        <LandingPageCard
                            image={landingimageCaseStudy}
                            content={
                                CaseStudyStatments.castStudy1.content
                            }></LandingPageCard>
                        <LandingPageCard
                            image={landingimageCaseStudy}
                            content={
                                CaseStudyStatments.castStudy2.content
                            }></LandingPageCard>
                        <LandingPageCard
                            image={landingimageCaseStudy}
                            content={
                                CaseStudyStatments.castStudy3.content
                            }></LandingPageCard>
                    </Stack>
                </Stack>
            </Container>
            <Stack
                bgcolor={"#131515"}
                direction={"row"}
                justifyContent="space-between"
                sx={{
                    border: "1px solid",
                    borderInline: "none",
                    padding: "3rem",
                }}>
                <Container maxWidth="xl" sx={{ margin: "auto" }}>
                    <Typography variant="h2" sx={{ color: "#fff" }}>
                        Call to Action! you can do it !!
                    </Typography>
                    <CustomButton>Get Started!!</CustomButton>
                </Container>
            </Stack>
            <Footer />
        </>
    );
};
