import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.uint16("v2")
	.uint32("v3")
	.uint8("v4")
	.uint32("v5")
	.uint8("v6")
	.uint32("v7")
	.uint32("v8")
	.uint32("v9")
	.uint32("v10")
	.uint32("v11")
	.uint32("v12")
	.uint32("v13")
	.uint32("v14")
	.uint32("v15")
	.uint32("v16")
	.uint32("v17")
	.uint32("v18")
	.uint32("v19")
	.uint32("v20")
	.uint32("v21")
	.uint32("v22")
	.uint32("v23")
	.uint32("v24")
	.uint32("v25")
	.uint32("v26")
	.uint32("v27")
	.uint32("v28")
	.uint32("v29")
	.uint32("v30")
	.uint32("v31")
	.uint32("v32")
	.uint32("v33")
	.uint32("v34")
	.uint32("v35")
	.uint32("v36")
	.uint32("v37")
	.uint32("v38")