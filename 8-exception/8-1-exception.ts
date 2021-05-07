{
  // Java : Exception
  // Javascript : Error
  // const array = new Array(100000000000000000000);

  // Error(Exception) Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === 'not exist!') {
      throw new Error(`file not exist! ${fileName}`);
    }

    return 'file contents';
  }

  function closeFile(fileName: string) {
    //
  }

  const fileName = 'file';

  // 에러가 발생할 수 있는 부분만 감싸서 try 쓰는게 좋음.
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log('catched!!');
  } finally {
    // finally : 성공하거나 catch(error)가 되어도 마지막에 실행되는 것
    closeFile(fileName);
    console.log(`finally!!`);
  }
}
