import { AcronymType } from "../types/Acronym";

export const general_acronyms: AcronymType[] = [
    {abbr:"AOS", name:"Acquisition of Signal", text:"A phrase used during launch when communication with the vehicle is established to a ground station."},
    {abbr:"ACS", name:"Attitude Control System", text:"Synonymous with Reaction Control System. See Reaction Control System."},
    {abbr:"ACES", name:"Advanced Cryogenic Evolved Stage", text:"A LOX/LH2 upper stage being developed for ULA's Vulcan launch vehicle."},
    {abbr:"ARM", name:"Asteroid Redirect Mission", text:"A planned NASA mission to redirect an asteroid to lunar orbit for rendezvous with an Orion spacecraft."},
    {abbr:"ASDS", name:"Autonomous Spaceport Drone Ship", text:"SpaceX's custom-built landing ship."},
    {abbr:"ASOG", name:"A Shortfall of Gravitas", text:"Name of an upcoming ASDS."},
    {abbr:"BEAM", name:"Bigelow Expandable Activities Module", text:"An inflatable module designed by Bigelow Aerospace that was brought up to the ISS aboard CRS-8."},
    {abbr:"BFR", name:"Big Falcon Rocket", text:"Former codename of Starship, SpaceX's next-generation fully-reusable launch vehicle and interplanetary spacecraft."},
    {abbr:"BO", name:"Blue Origin", text:"Spaceflight and rocket company funded by Jeff Bezos, founder and CEO of Amazon. See Competitors."},
    {abbr:"C3", name:"Characteristic Energy", text:"A measure of escape velocity (<1: no escape, =1: escape with no further velocity, >1: escape with increasing velocity)."},
    {abbr:"CAA", name:"Crew Access Arm", text:"Arm that swings out from the FSS (Fixed Service Structure) to give crew access to Dragon while on the pad."},
    {abbr:"CBM", name:"Common Berthing Mechanism", text:"A device used to attach Cargo Dragon and other cargo spacecraft to the ISS."},
];

export const orbits_acronyms: AcronymType[] = [
    {abbr:"BEO", name:"Beyond Earth Orbit", text:"any location or orbit outside of the Earth's gravitational influence"},
    {abbr:"DRO", name:"Distant Retrograde Orbit", text:"a highly stable lunar orbit, proposed as the destination for the ARM asteroid"},
    {abbr:"GEO", name:"Geostationary Orbit", text:"a circular geocentric orbit along the equator at 35,786 km altitude, with an orbital period of exactly one day"},
    {abbr:"GTO", name:"Geostationary Transfer Orbit", text:"a highly elliptical geocentric orbit with perigee in LEO and apogee at or above GEO"},
    {abbr:"HEO", name:"High Earth Orbit", text:"a geocentric orbit with an altitude above 35,786 km"},
    {abbr:"LEO", name:"Low Earth Orbit", text:"a geocentric orbit with an altitude under 2,000 km"},
    {abbr:"LOI", name:"Lunar Orbit Insertion", text:"a maneuver performed during Lunar fly-by which forces a spacecraft into Lunar orbit"},
    {abbr:"MEO", name:"Medium Earth Orbit", text:"a geocentric orbit with an altitude between 2,000 km and 35,786 km"},
    {abbr:"MOI", name:"Mars Orbit Insertion", text:"a maneuver performed during Mars fly-by which forces a spacecraft into an aerocentric orbit"},
]

export const fules_acronyms: AcronymType[] = [
    {abbr:"CH4", name:"Methane", text:"a simple hydrocarbon used as a cryogenic fuel"},
    {abbr:"LH2", name:"Liquid Hydrogen (H2)", text:"a very chemically simple cryogenic fuel"},
    {abbr:"LNG", name:"Liquid Natural Gas", text:"a cryogenic mixture of simple hydrocarbons, usually 80-99% methane"},
    {abbr:"LOX", name:"Liquid Oxygen", text:"a commonly used cryogenic oxidiser (used in Falcon)"},
    {abbr:"MMH", name:"Monomethyl Hydrazine", text:"a highly toxic fuel that is liquid under standard conditions (used in Dragon)"},
    {abbr:"N2O4", name:"Dinitrogen Tetroxide, aka DNTO", text:"a highly toxic oxidiser that is liquid under standard conditions (used in Dragon)"},
    {abbr:"RP-1", name:"Rocket Propellant-1, aka kerosene", text:"a complex hydrocarbon used as a combustible fuel (used in Falcon)"},
];