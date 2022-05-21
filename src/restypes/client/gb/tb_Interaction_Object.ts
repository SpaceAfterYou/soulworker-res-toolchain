import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.swstring("v2")
	.uint8("v3")
	.uint32("v4")
	.uint8("v5")
	.uint8("v6")
	.uint8("v7")
	.swstring("v8")
	.uint8("v9")
	.uint8("v10")
	.uint8("v11")
	.uint32("v12")
	.uint32("v13")
	.uint32("v14")
	.uint32("v15")
	.uint32("v16")
	.uint32("v17")
	.uint32("v18")
	.int16("v19")
	.int16("v20")
	.uint32("v21")
	.uint32("v22")
	.uint8("v23")
	.uint32("v24")
	.uint32("v25")
	.uint32("v26")
	.uint32("v27")
	.uint32("v28")
	.uint8("v29")
	.swstring("v30")
	.swstring("v31")
	.swstring("v32")
	.swstring("v33")
	.swstring("v34")
	.swstring("v35")
	.swstring("v36")
	.swstring("v37")
	.swstring("v38")
	.swstring("v39")
	.floatle("v40")
	.int16("v41")
	.int16("v42")
	.int16("v43")
	.int16("v44")
	.int16("v45")
	.int16("v46")