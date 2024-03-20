"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ListCode from "@/components/ListCode";
import useDebounce from "@/hooks/useDebounce";
import { CodeType, OrderEnum } from "@/types.dt";
import getAllCodes from "@/hooks/useGetAllCode";

const AllCodes = () => {
  const [codes, setAllCodes] = useState<CodeType[]>([]);
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.asc);
  const [username, setUserName] = useState<string>("");

  const delayedSearchUsername = useDebounce((value: string) => {
    setUserName(value);
  }, 500);

  useEffect(() => {
    getAllCodes(order, username).then((res: CodeType[] | any) => {
      if (res.status == 200 && res.data.allCodes.length > 0) {
        setAllCodes(res.data.allCodes);
      }
    });
  }, [order, username]);

  return (
    <div className="mt-10 flex  flex-col">
      <div className=" flex  justify-between md:p-8 py-8 px-4 md:gap-10 gap-4">
        <div className="md:block hidden"></div>
        <div className="md:w-2/5 w-full">
          <input
            type="text"
            className=" bg-neutral-900 outline-none px-4 py-4 rounded-md outline-2 focus:outline-purple-800 w-full text-sm"
            placeholder="search by username"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              delayedSearchUsername(e.target.value);
            }}
          />
        </div>
        <select
          name=""
          id=""
          defaultValue={order}
          className="bg-black outline-none px-3  border-2 rounded-md  border-gray-400"
          onChange={(e: any) => setOrder(e.target.value)}
        >
          <option value={OrderEnum.asc}>Ascending</option>
          <option value={OrderEnum.desc}>Descending</option>
        </select>
      </div>
      <div>
        <div className="bg-neutral-900 max-w-full  rounded-sm py-5 px-10 grid sm:grid-cols-4 md:grid-cols-6 grid-cols-3 text-gray-300 min-w-[300px]">
          <p className="sm:block hidden">Id</p>
          <p>Username</p>
          <p className="col-span-2 md:block hidden text-center">Timestamp</p>
          <p className="text-right">Language</p>
          <p className="text-right">Code</p>
        </div>

        <div className="mt-8">
          {codes &&
            codes.map((code, index) => {
              return <ListCode key={index} code={code} />;
            })}
          {codes && codes.length == 0 && (
            <div className="flex items-center justify-center text-2xl">
              No code found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCodes;
