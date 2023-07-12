import {addWebsiteInfo, updateWebsiteInfo} from "@/services/website/formWebsite";
import {addItinerary, updateItinerary} from "@/services/itinerary/formItinerary";
import {addMilestone, updateMilestone} from "@/services/FAQ/formFaq";
import {addContact, updateContact} from "@/services/Contact/formContact";
import {addFamilyMember, updateFamilyMember} from "@/services/familyMember/formFamilyMember";

export const STEPS = [
  {
    name: "Basic Info",
    filter: ['createdDate'],
    updateAction: updateWebsiteInfo,
    addAction: addWebsiteInfo,
  },
  {
    name: "Itinerary",
    filter: ['arrayId', 'createdDate', 'image'],
    updateAction: updateItinerary,
    addAction: addItinerary,
    getImage: true,
  },
  {
    name: "Milestone",
    filter: ['arrayId', 'createdDate'],
    updateAction: updateMilestone,
    addAction: addMilestone,
  },
  {
    name: "Contact",
    filter: ['arrayId', 'createdDate', 'image'],
    updateAction: updateContact,
    addAction: addContact,
    getImage: true,
  },
  {
    name: "Family",
    filter: ['arrayId', 'createdDate'],
    updateAction: updateFamilyMember,
    addAction: addFamilyMember,
  },
]