"use client";
import { eventData } from "../../../public/data/eventsData";
import Container from "../container/Container";
import ContainerFluid from "../container/ContainerFulid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EventsCard from "./EventsCard";
const Events = () => {
  return (
    <section>
      <ContainerFluid>
        <Container>
          <div>
            <div className="lg:w-[158px] mx-auto ">
              <h1 className="text-5xl  text-[#111] font-bold text-center">
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
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventData?.map((event) => (
                      <EventsCard key={event.image} event={event} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
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
