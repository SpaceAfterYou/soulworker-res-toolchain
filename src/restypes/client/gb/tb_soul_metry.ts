import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint16("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.uint16("v6")
	.uint16("v7")
	.uint16("v8")
	.uint32("v9")
	.uint32("v10")
	.uint32("v11")
	.uint32("v12")
	.uint32("v13")
	.uint16("v14")
	.uint16("v15")
	.uint16("v16")
	.uint16("v17")
	.uint16("v18")
	.swstring("v19")
	.swstring("v20")
	.swstring("v21")
	.swstring("v22")
	.swstring("v23")
	.uint16("v24")
	.uint16("v25")
	.uint16("v26")
	.uint16("v27")
	.uint16("v28")
	.uint8("v29")
	.uint8("v30")
	.uint32("v31")
	.uint32("v32")
	.uint8("v33")
	.uint8("v34")
	.uint32("v35")
	.uint32("v36")
	.uint32("v37")
	.uint32("v38")
	.uint32("v39")
	.uint32("v40")
	.uint16("v41")