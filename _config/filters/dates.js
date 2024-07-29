import dayjs from "dayjs";

/** Converts the given date to ISO8610 format. */
export const toISOString = date => dayjs(dateString).toISOString();

/** Formats a date using dayjs's conventions: https://day.js.org/docs/en/display/format */
export const formatDate = (date, format) => dayjs(date).format(format);

export const year = (date) => dayjs(date).format('YYYY');

export const yearMonth = (date) => dayjs(date).format('YYYY-MM');

export const month = (date) => dayjs(date).format('MMM');

export const monthDate = (date) => dayjs(date).format('MMM D');

export const readableDate = (date) => dayjs(date).format('MMM D, YYYY');
