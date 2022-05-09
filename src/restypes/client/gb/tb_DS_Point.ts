import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint16("v2")
	.uint8("v3")
	.uint8("v4")
	.uint8("v5")
	.uint8("v6")
	.uint8("v7")
	.uint8("v8")
	.uint16("v9")
	.uint16("v10")
	.uint16("v11")
	.uint16("v12")
	.uint16("v13")
	.uint8("v14")
	.uint8("v15")
	.uint8("v16")
	.uint8("v17")
	.uint8("v18")
	.uint32("v19")
	.uint32("v20")
	.uint32("v21")
	.uint32("v22")
	.uint32("v23")
	.uint8("v24")
	.uint8("v25")
	.uint8("v26")
	.uint8("v27")
	.uint8("v28")