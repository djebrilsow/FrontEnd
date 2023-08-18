import React, {useState, useEffect} from 'react'
import categoriesService from '../services/categoriesService'
import Swal from 'sweetalert2'


const ListCategories = () => {
    const [categories, setCategories] = useState({})
    const [affiche, setAffiche] = useState(false)

    
    const GetAllCategories= () => {
        categoriesService.GetAll().then((res) => {
            console.log(res)
            setCategories(res.data.data)
            setAffiche(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(()=> {
        GetAllCategories()
    }, [])

    const deletCategory = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                categoriesService.remove(id).then((res) => {
                    GetAllCategories()
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

  if(affiche) {
  return (
    <div>
{/* START RESPONSIVE TABLES */}
<div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">List Categories</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={100}>name</th>
                <th width={100}>description</th>
                <th width={100}>SubCategories</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>  
                {categories?.map((item) => {
                    return (
                        <tr id="trow_1" >
                        <td className="text-center"> {item._id} </td>
                        <td><strong> {item.name} </strong></td>
                        <td><span className="label label-success"> {item.description} </span></td>
                        <td>{item.subcategories.map((subcategory) => {
                            return (
                                <tr > 
                                    {subcategory.name} 
                                </tr>
                            )
                        })} </td>
                        <td>
                          <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                          <button className="btn btn-danger btn-rounded btn-sm" onClick= {(e)=>deletCategory(item._id)} ><span className="fa fa-times" /></button>
                        </td>
                      </tr>
                    )
                })}                                          


            </tbody>
          </table>
        </div>                                
      </div>
    </div>                                                
  </div>
</div>
{/* END RESPONSIVE TABLES */}

    </div>
  )
}
}

export default ListCategories
