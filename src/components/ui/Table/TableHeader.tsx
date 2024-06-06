import React, { useState } from "react";
import Button from "../Button";
import { closeWhiteIcon, filterIcon, searchWhiteIcon } from "constants/assets";
import SearchInput from "../SearchInput";
import Input from "../Input";
import DateInput from "../DateInput";
import SelectInput from "../SelectInput";
import { Formik } from "formik";

interface ITableProps {
  onSearchInputChange: any;
  onFilterSubmit: any;
  filteringKeys: any;
  onClearFilter: any;
}

const TableHeader: React.FC<ITableProps> = ({
  onSearchInputChange,
  filteringKeys,
  onFilterSubmit,
  onClearFilter,
}) => {
  const [showFilter, setShowFilter] = useState(false);

  // Create initialValues dynamically based on filteringKeys
  const initialValues = filteringKeys.reduce((acc: any, cur: any) => {
    acc[cur.key] = "";
    return acc;
  }, {});

  return (
    <>
      <div className="py-6 flex-wrap bg-primary-light px-16 max-md:px-2 flex items-center justify-between">
        <h3 className="text-2xl text-primary">Patient Reports</h3>
        <div className="flex gap-4">
          <Button
            text="Apply Filter"
            size="sm"
            icon={filterIcon}
            onClick={() => setShowFilter((prev) => !prev)}
          />
          <SearchInput
            placeholder="Search by Doctor Name/ Patient Name/ Test Name..."
            onChange={onSearchInputChange}
          />
        </div>
      </div>
      {/* Filter Option */}
      <div
        className={`container mx-auto px-4 duration-500 overflow-hidden ${
          showFilter ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-solid border-2 border-gray">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              onFilterSubmit(values);
            }}
          >
            {({ values, handleChange, handleSubmit, resetForm }: any) => (
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-16 gap-y-4 py-4">
                  {filteringKeys.map((cur: any) =>
                    cur.filterComponent === "date" ? (
                      <DateInput
                        onChange={handleChange}
                        value={values[cur.key]}
                        labelAlign="horizontal"
                        label={cur.key}
                        name={cur.key}
                      />
                    ) : cur.filterComponent === "input" ? (
                      <Input
                        onChange={handleChange}
                        value={values[cur.key]}
                        name={cur.key}
                        labelAlign="horizontal"
                        label={cur.key}
                      />
                    ) : cur.filterComponent === "select" ? (
                      <SelectInput
                        label={cur.key}
                        name={cur.key}
                        labelAlign="horizontal"
                        options={cur?.selectOptions || []}
                        onChange={handleChange}
                        value={values[cur.key]}
                      />
                    ) : null
                  )}
                </div>

                <div className="bg-primary-light h-14 flex flex-wrap justify-between items-center px-16 w-full">
                  <span className="text-gray text-base max-md:hidden">
                    Please provide search criteria and hit search button.
                  </span>

                  <div className="flex items-center gap-5">
                    <Button
                      text="Search"
                      size="sm"
                      type="primary"
                      htmlType="submit"
                      iconPlacement="left"
                      icon={searchWhiteIcon}
                    />
                    <Button
                      text="Clear"
                      size="sm"
                      type="danger"
                      htmlType="button"
                      iconPlacement="left"
                      icon={closeWhiteIcon}
                      onClick={() => {
                        resetForm({
                          values: initialValues,
                        });
                        onClearFilter();
                      }}
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
