$rootFolderPath = "E:\CodingHere\LearnFullStack\HTML_CSS_JS_100_OF_Loc\Page"

for ($i = 6; $i -le 100; $i++) {
    # Tạo tên thư mục với định dạng "B0n" + số
if ($i -lt 10) {
    $folderName = "B0" + $i.ToString()
}
else{
	$folderName = "B" + $i.ToString()
}
    $newFolderPath = Join-Path -Path $rootFolderPath -ChildPath $folderName
 	New-Item -Path $newFolderPath -ItemType Directory
    #Remove-Item -Path $newFolderPath 
#-ItemType Directory
}
