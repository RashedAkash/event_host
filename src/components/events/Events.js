"use client";
import { eventData } from "../../../public/data/eventsData";
import Container from "../container/Container";
import ContainerFluid from "../container/ContainerFulid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EventsCard from "./EventsCard";
const Events = () => {
  const forYou = eventData?.filter(e=> e.category === 'for you' )
  const thisDay = eventData?.filter((e) => e.category === "this day");
  const union = eventData?.filter((e) => e.category === "union");
  const thisWeek = eventData?.filter((e) => e.category === "this week");
  const music = eventData?.filter((e) => e.category === "music");
  return (
    <section className="my-[100px]">
      <ContainerFluid>
        <Container>
          <div>
            <div className="lg:w-[158px] mx-auto ">
              <h1 className="text-5xl mb-6  text-[#111] font-bold text-center">
                Events
              </h1>
            </div>
            <div className="text-center">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>For You</Tab>
                  <Tab>This Day</Tab>
                  <Tab>This Week</Tab>
                  <Tab>Music</Tab>
                  <Tab>Union</Tab>
                </TabList>

                <TabPanel>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {eventData?.map((event) => (
                      <EventsCard key={event.image} event={event} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {forYou?.map((event) => (
                      <EventsCard key={event.image} event={event} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {thisDay?.map((event) => (
                      <EventsCard key={event.image} event={event} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {thisWeek?.map((event) => (
                      <EventsCard key={event.image} event={event} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {music?.map((event) => (
                      <EventsCard key={event.image} event={event} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {union?.map((event) => (
                      <EventsCard key={event.image} event={event} />
                    ))}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </Container>
      </ContainerFluid>
    </section>
  );
};

export default Events;
