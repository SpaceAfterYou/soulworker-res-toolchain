import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint32("v1")
	.uint8("v2")
	.uint16("v3")
	.swstring("v4")
	.uint32("v5")
	.uint32("v6")
	.int16("v7")
	.int16("v8")
	.swstring("v9")
	.uint16("v10")
	.uint32("v11")
	.uint8("v12")
	.uint8("v13")
	.uint8("v14")
	.uint16("v15")
	.uint8("v16")
	.uint32("v17")
	.uint32("v18")
	.swstring("v19")