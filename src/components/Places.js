/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Places extends React.Component {
  state = {
    places: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/data`).then((res) => {
      const places = res.data;
      this.setState({ places });
    });
  }

  render() {
    return (
      <div class="pl-136px pt-20 pb-10 pr-10 bg-line">
        <div>
          <div class="mb-7 grid grid-cols-9">
            <h class="text-black text-2xl font-medium not-italic col-span-2">
              Place List
            </h>
            <div class="col-span-2 col-start-5 grid grid-cols-1 border-r-def border-default pr-3">
              <select
                type="text"
                placeholder="Custom focus style"
                class="border-base border-default h-full rounded-full focus:outline-1 focus:outline-offset-0 focus:ring focus:ring-default focas:ring-inset"
              >
                <option value="restaurant">Restaurant</option>
                <option value="bakery">Bakery</option>
                <option value="cafe">Cafe</option>
              </select>
            </div>
            <div class="col-span-3 col-start-7 grid grid-cols-1 pl-3">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  
                  <input
                    type="text"
                    id="simple-search"
                    class="w-full border-base border-default h-full rounded-full focus:outline-none focus:outline-offset-0 focus:ring focus:ring-default focas:ring-inset"
                    placeholder="Search name..."
                    required
                  />
                  <div class="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-8">
            {this.state.places.map((place) => {
              return (
                <div>
                  <Link to={`/about/${place.id}`}>
                    <button class="px-4 pt-4 pb-2 bg-white w-full col-span-1 rounded-10 shadow-card focus:bg-secondary">
                      <div class="flex flex-row">
                        <div class="w-14 h-14 mb-3">
                          <img
                            class="h-full w-full rounded-10"
                            src={place.profile_image_url}
                          />
                        </div>
                        <div class="flex flex-col w-full pl-4 items-start">
                          <div class="font-medium text-lg">{place.name}</div>
                          <div class="flex flex-row w-full mt-2">
                            <div class="mr-1">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.83334 9.16675H7.50001V10.8334H5.83334V9.16675ZM5.83334 12.5001H7.50001V14.1667H5.83334V12.5001ZM9.16668 9.16675H10.8333V10.8334H9.16668V9.16675ZM9.16668 12.5001H10.8333V14.1667H9.16668V12.5001ZM12.5 9.16675H14.1667V10.8334H12.5V9.16675ZM12.5 12.5001H14.1667V14.1667H12.5V12.5001Z"
                                  fill="black"
                                />
                                <path
                                  d="M4.16667 18.3334H15.8333C16.7525 18.3334 17.5 17.5859 17.5 16.6667V5.00008C17.5 4.08091 16.7525 3.33341 15.8333 3.33341H14.1667V1.66675H12.5V3.33341H7.5V1.66675H5.83333V3.33341H4.16667C3.2475 3.33341 2.5 4.08091 2.5 5.00008V16.6667C2.5 17.5859 3.2475 18.3334 4.16667 18.3334ZM15.8333 6.66675L15.8342 16.6667H4.16667V6.66675H15.8333Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div class="inline-block">
                              {place.operation_time[0].time_open}
                            </div>
                            <div class="inline-block">-</div>
                            <div class="inline-block">
                              {place.operation_time[0].time_close}
                            </div>

                            <div class="flex flex-row justify-end w-full">
                              <div class="my-auto mr-1">
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

                              <h class="text-primary font-medium">
                                {place.rating}
                              </h>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="rounded-b-ss rounded-t-10 flex flex-row overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide md:scrollbar-default">
                        <img class="h-120 w-full" src={place.images[0]} />
                        <img class="h-120 w-full" src={place.images[1]} />
                        <img class="h-120 w-full" src={place.images[2]} />
                      </div>
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
