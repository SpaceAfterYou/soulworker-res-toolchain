import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint8("v2")
	.uint8("v3")
	.uint16("v4")
	.uint8("v5")
	.uint32("v6")
	.uint8("v7")
	.uint8("v8")
	.uint8("v9")
	.uint8("v10")
	.uint8("v11")
	.uint8("v12")
	.uint16("v13")
	.uint16("v14")
	.uint16("v15")
	.uint16("v16")
	.uint16("v17")
	.swstring("v18")
	.swstring("v19")
	.swstring("v20")
	.swstring("v21")
	.swstring("v22")