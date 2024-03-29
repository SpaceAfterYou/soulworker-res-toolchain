import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint8("v1")
	.uint8("v2")
	.uint16("v3")
	.uint8("v4")
	.uint32("v5")
	.uint8("v6")
	.uint32("v7")
	.uint32("v8")
	.swstring("v9")
	.uint8("v10")
	.uint32("v11")
	.uint8("v12")
	.int16("v13")
	.int16("v14")
	.int16("v15")
	.int16("v16")
	.int16("v17")
	.int16("v18")
	.uint8("v19")
	.int16("v20")
	.int16("v21")
	.swstring("v22")