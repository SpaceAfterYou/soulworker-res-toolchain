import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint8("v2")
	.uint16("v3")
	.swstring("v4")
	.uint32("v5")
	.uint8("v6")
	.uint8("v7")
	.uint8("v8")
	.uint32("v9")
	.uint32("v10")
	.uint16("v11")
	.uint32("v12")
	.uint32("v13")
	.uint16("v14")
	.uint32("v15")
	.uint32("v16")
	.uint16("v17")
	.uint32("v18")
	.uint16("v19")