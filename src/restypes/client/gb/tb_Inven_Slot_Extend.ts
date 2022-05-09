import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint8("v1")
	.uint8("v2")
	.uint8("v3")
	.uint32("v4")
	.uint8("v5")
	.uint16("v6")
	.uint8("v7")
	.uint8("v8")
	.uint32("v9")
	.uint8("v10")
	.uint16("v11")
	.uint8("v12")
	.uint8("v13")
	.uint32("v14")
	.uint8("v15")
	.uint16("v16")
	.uint8("v17")
	.uint8("v18")
	.uint32("v19")
	.uint8("v20")
	.uint16("v21")