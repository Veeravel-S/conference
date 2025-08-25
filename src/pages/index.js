import AboutOphthall from "@/Conference/AboutOphthall";
import Accommodations from "@/Conference/Accommodations";
import ConferenceBanner from "@/Conference/ConferenceBanner";
import ConferenceHightlights from "@/Conference/ConferenceHighlights";
import JoinOphthall from "@/Conference/JoinOphthall";
import OrganizingChairman from "@/Conference/OrganizingChairman";
import VenueDetails from "@/Conference/VenueDetails";
import { conferenceData } from "@/constant";


const ConferencePage = () => {
    return <>
        <ConferenceBanner data={conferenceData?.banner} />
        <AboutOphthall data={conferenceData?.aboutOphthall} />
        <OrganizingChairman data={conferenceData?.organizingChairman} />
        <ConferenceHightlights data={conferenceData?.conferenceHightlights} />
        <VenueDetails data={conferenceData?.venueDetails} />
        <Accommodations data={conferenceData?.accommodations} />
        <JoinOphthall data={conferenceData?.joinOphthall} /></>;
};

export default ConferencePage;
