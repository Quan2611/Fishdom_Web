import { Row, Space, Pagination, Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Item from "./Item";

const LIMIT_DISPLAY_ITEM = 6;

function HistoryHavest({
	handleFetchData,
	setSkip,
	data,
	count,
	CrownContract,
	currentPage,
	setCurrentPage,
	loading,
	setLoading,
}) {
	let renderHistoryHavestStaking;

	renderHistoryHavestStaking =
		data &&
		data?.length > 0 &&
		data.map((item, index) => (
			<Item item={item} key={index} CrownContract={CrownContract} />
		));
	useEffect(() => {
		if (data) {
			setLoading(false);
		}
	}, [data]);
	return loading ? (
		<Spin />
	) : (
		<>
			<div className="module-content">
				<Row gutter={[30, 30]}>{renderHistoryHavestStaking}</Row>
			</div>
			{data && data.length > 0 ? (
				<Space direction="vertical" className="pagination" align="center">
					<Pagination
						defaultCurrent={currentPage}
						pageSize={LIMIT_DISPLAY_ITEM}
						total={count}
						onChange={(pageNum) => {
							const nextSkip = (pageNum - 1) * LIMIT_DISPLAY_ITEM;
							handleFetchData("HavestStaking", nextSkip);
							setSkip(nextSkip);
							setCurrentPage(pageNum);
						}}
					/>
				</Space>
			) : (
				<Empty />
			)}
		</>
	);
}

export default HistoryHavest;
