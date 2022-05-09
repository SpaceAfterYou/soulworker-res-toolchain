import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint8("v2")
	.uint8("v3")
	.uint8("v4")
	.uint8("v5")
	.uint8("v6")
	.uint8("v7")
	.uint8("v8")
	.uint8("v9")
	.uint8("v10")
	.uint8("v11")
	.uint8("v12")
	.uint8("v13")
	.uint8("v14")
	.uint8("v15")
	.uint8("v16")
	.uint8("v17")
	.uint8("v18")
	.uint8("v19")
	.uint8("v20")
	.uint8("v21")
	.swstring("v22")
	.swstring("v23")
	.swstring("v24")
	.swstring("v25")
	.swstring("v26")
	.swstring("v27")
	.swstring("v28")
	.swstring("v29")
	.swstring("v30")
	.swstring("v31")
	.uint16("v32")
	.uint16("v33")
	.uint16("v34")
	.uint16("v35")
	.uint16("v36")
	.uint16("v37")
	.uint16("v38")
	.uint16("v39")
	.uint16("v40")
	.uint16("v41")
	.uint16("v42")
	.uint8("v43")
	.uint32("v44")