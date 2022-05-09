import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.swstring("v2")
	.uint32("v3")
	.uint32("v4")
	.uint32("v5")
	.swstring("v6")
	.uint32("v7")