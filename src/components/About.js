/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function AboutList() {
  const { id } = useParams();
  const [plases, setPlases] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://localhost:8000/data/${id}`).then((response) => {
      setPlases(response.data);
    });
  }, [id]);

  if (!plases) return null;
  return (
    <div class="pl-136px pt-20 pb-10 pr-10 bg-line">
      <Link to={`/`}>
        <input
          type="button"
          value="<Back"
          class="text-white h-10 w-20 bg-primary rounded-full mb-4 cursor-pointer"
        />
      </Link>
      <div>
        <div class="grid grid-cols-8 grid-rows-3 gap-8">
          <div class="row-span-2 col-span-5 w-full h-full rounded-10">
            <div class="grid grid-rows-2">
              <div class="row-span-1">
                <img
                  class="h-300 w-full object-none rounded-t-10"
                  src={plases.profile_image_url}
                />
              </div>
              <div class="row-span-1">
                <div class="w-full h-full rounded-b-10 bg-white p-6">
                  <div>
                    <div class="flex flex-row">
                      <div class="w-full">
                        <h class="text-2xl font-medium">{plases.name}</h>
                      </div>
                      <div>
                        <div class="flex flex-row">
                          <div class="mt-2 mr-1">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="5.5"
                                cy="5.5"
                                r="5.5"
                                fill="#134B8A"
                              />
                            </svg>
                          </div>
                          <h class="text-lg font-medium text-primary">
                            {plases.rating}
                          </h>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="flex flex-row">
                      <div class="mr-14">
                        <h>Address:</h>
                      </div>
                      <div>
                        <h>{plases.address}</h>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="flex flex-row">
                      <div class="mr-3">
                        <h>Opening Hour:</h>
                      </div>

                      <div>
                        <div>
                          <h>{plases.operation_time[0].day}:</h>&nbsp;
                          <h>{plases.operation_time[0].time_open}</h>-
                          <h>{plases.operation_time[0].time_close}</h>
                        </div>
                        <div>
                          <h>{plases.operation_time[1].day}:</h>&nbsp;
                          <h>{plases.operation_time[1].time_open}</h>
                          <h>{plases.operation_time[1].time_close}</h>
                        </div>

                        <div>
                          <h>{plases.operation_time[2].day}:</h>&nbsp;
                          <h>{plases.operation_time[2].time_open}</h>
                          <h>{plases.operation_time[2].time_close}</h>
                        </div>

                        <div>
                          <h>{plases.operation_time[3].day}:</h>&nbsp;
                          <h>{plases.operation_time[3].time_open}</h>-
                          <h>{plases.operation_time[3].time_close}</h>
                        </div>

                        <div>
                          <h>{plases.operation_time[4].day}:</h>&nbsp;
                          <h>{plases.operation_time[4].time_open}</h>-
                          <h>{plases.operation_time[4].time_close}</h>
                        </div>

                        <div>
                          <h>{plases.operation_time[5].day}:</h>&nbsp;
                          <h>{plases.operation_time[5].time_open}</h>-
                          <h>{plases.operation_time[5].time_close}</h>
                        </div>

                        <div>
                          <h>{plases.operation_time[6].day}:</h>&nbsp;
                          <h>{plases.operation_time[6].time_open}</h>-
                          <h>{plases.operation_time[6].time_close}</h>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-8 row-span-3 col-span-3 row-start-1 col-start-6 w-full h-full rounded-10 bg-white">
            <div class="w-full mb-2">Images</div>

            <div class="w-full h-full pb-8 grid grid-rows-3">
              <div class="w-full h-full">
                <img
                  class="h-full w-full rounded-t-10"
                  src={plases.images[0]}
                />
              </div>
              <div class="w-full h-full">
                <img class="h-full w-full" src={plases.images[1]} />
              </div>
              <div class="w-full h-full">
                <img
                  class="h-full w-full rounded-b-10"
                  src={plases.images[2]}
                />
              </div>
            </div>
          </div>
          {/* 
          {plases.categories.map((place) => {
            return (
              <div>
                <h>Cat: {place}</h>
              </div>
            );
          })}
           */}
        </div>
      </div>
    </div>
  );
}
export default AboutList;
