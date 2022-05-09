import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.int16("v2")
	.int16("v3")
	.swstring("v4")
	.uint16("v5")
	.swstring("v6")
	.swstring("v7")
	.swstring("v8")
	.swstring("v9")
	.uint32("v10")
	.uint32("v11")
	.swstring("v12")
	.swstring("v13")