import { downloadFile } from "./download-file";
import type { ResFile } from "@/types/res-file";

export function convertToCSV(file: ResFile) {
  const header = Object.keys(file.parsed.rows[0]).join();
  const body = file.parsed.rows.map((c) => Object.values(c).join()).join("\n");

  downloadFile(`${header}\n${body}`, `${file.filename}.csv`);
}
