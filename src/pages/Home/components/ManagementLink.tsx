import { useQuery } from "react-query";
import { z } from "zod";
import manageLogo from "../../../assets/svg/manageLogo.svg"
import { getAppConstants } from "../../../util/constants";
import { fetchBackendCurry } from "../../../API/util";

export function ManagementLink() {
  const { data } = useQuery({
    queryKey: ["fetchRolesData"],
    queryFn: fetchBackendCurry("/api/user/roles", z.array(z.string())),
  });
  if ( data?.length === 0 || data === undefined) return null;
  return (
    <a href={getAppConstants().MANAGEMENT_URL}>
      <div className="mx-4 bg-[#D5EFF9] rounded-[1.25rem] place-content-center font-[inter] shadow-[2px_3px_6px_1px_rgba(123,123,123,0.25)] flex justify-between py-[1.1rem]">
        <div className="ml-[2.5rem] ">
          <img src={manageLogo} />
        </div>
        <div className="w-full text-center text-[rgba(0,0,0,0.70)] text-[1.5rem] font-[600] tracking-[0.2rem]">
          進入後台管理系統
        </div>
      </div>
    </a>
  );
}
